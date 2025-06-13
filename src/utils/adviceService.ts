import { Advice } from '../types';
import { GAME_CONFIG } from '../data/gameConfig';
import fakeAdvicesData from '../data/fakeAdvices.json';

export class AdviceService {
  private static lastFetchTime: number = 0;
  private static cachedAdvice: Advice | null = null;
  private static readonly CACHE_DURATION = 2000; // 2 seconds as per API
  private static usedFakeAdviceIds: Set<number> = new Set();

  static async fetchRealAdvice(): Promise<Advice> {
    const now = Date.now();

    if (this.cachedAdvice && (now - this.lastFetchTime) < this.CACHE_DURATION) {
      console.log('Returning cached advice (API cache: 2s)');
      return this.cachedAdvice;
    }

    try {
      const url = `${GAME_CONFIG.API_URL}?t=${now}`;
      const response = await fetch(url, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Advice = await response.json();
      this.cachedAdvice = data;
      this.lastFetchTime = now;
      return data;
    } catch (error) {
      console.error('Error fetching advice:', error);
      const fallbackAdvices: Advice[] = [
        { slip: { id: 9001, advice: 'Keep trying, even when things get tough.' } },
        { slip: { id: 9002, advice: 'Every step forward counts.' } }
      ];
      const randomFallback = fallbackAdvices[Math.floor(Math.random() * fallbackAdvices.length)];
      this.cachedAdvice = randomFallback;
      this.lastFetchTime = now;
      return randomFallback;
    }
  }

  static getFakeAdvice(): Advice {
    const availableAdvices = fakeAdvicesData.fake_advices.filter(
      advice => !this.usedFakeAdviceIds.has(advice.slip.id)
    );

    if (availableAdvices.length === 0) {
      this.usedFakeAdviceIds.clear();
      return fakeAdvicesData.fake_advices[0];
    }

    const randomIndex = Math.floor(Math.random() * availableAdvices.length);
    const selectedAdvice = availableAdvices[randomIndex];
    this.usedFakeAdviceIds.add(selectedAdvice.slip.id);
    return selectedAdvice;
  }

  static async getAdvice(isReal: boolean): Promise<Advice> {
    return isReal ? await this.fetchRealAdvice() : this.getFakeAdvice();
  }

  static resetUsedAdvices(): void {
    this.usedFakeAdviceIds.clear();
  }

  static clearCache(): void {
    this.cachedAdvice = null;
    this.lastFetchTime = 0;
  }
}