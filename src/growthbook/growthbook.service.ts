import { Injectable } from '@nestjs/common';
import { setPolyfills } from '@growthbook/growthbook';
import { GrowthBook } from '@growthbook/growthbook';

setPolyfills({
  // Required for Node 17 or earlier
  fetch: require('cross-fetch'),
  // Optional, can make feature rollouts faster
  EventSource: require('eventsource'),
});

@Injectable()
export class GrowthBookService {
  private growthbook: GrowthBook;

  constructor() {
    this.growthbook = new GrowthBook({
      apiHost: 'http://localhost:3300',
      clientKey: 'sdk-F6JH5gbfH4pHc0U',
      enableDevMode: true,
      trackingCallback: (experiment, result) => {
        // TODO: Use your real analytics tracking system
        console.log('Viewed Experiment', {
          experimentId: experiment.key,
          variationId: result.key,
        });
      },
    });

    // Load features (will be cached in-memory for future requests)
    this.growthbook
      .loadFeatures({
        autoRefresh: true, // esto permite que el cambio de feature flag sea inmediato uando es hosteado
      })
      .catch((e) => {
        console.error('Failed to load features from GrowthBook', e);
      });
  }

  isFeatureEnabled(featureFlag: string): boolean {
    return this.growthbook.isOn(featureFlag);
  }

  getFeatureValue(): string {
    return this.growthbook.getFeatureValue('testf1', 'fallback');
  }
}
