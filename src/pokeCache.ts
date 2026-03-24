export type CacheEntry<T> = {
    createdAt: number,
    val: T,
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(reapInterval: number) {
        this.#interval = reapInterval;
        this.#startReapLoop();
    }

    add<T>(key: string, val: T) {
        this.#cache.set(key, {
            createdAt: Date.now(),
            val: val
        });
    }

    get<T>(key: string): T | undefined {
        if (!this.#cache.has(key)) {
            return undefined;
        }

        return this.#cache.get(key)?.val;
    }

    #reap() {
        for (const [key, value] of this.#cache?.entries()) {
            if (value.createdAt < Date.now() - this.#interval) {
                this.#cache.delete(key);
            }
        }
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(this.#reap.bind(this), this.#interval);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}   