import { Cache } from "./pokeCache.js";
import { test, expect } from "vitest";

test.concurrent.each([
    {
        key: "https://example.com",
        val: "testData",
        interval: 500, //0.5 seconds
    },
    {
        key: "https://example.com/path",
        val: "otherTestData",
        interval: 500, //0.5 seconds
    },
])("Test Caching $interval ms", async({ key, val, interval }) => {
    const cache = new Cache(interval);

    cache.add(key, val);
    const cached = cache.get(key);
    expect(cached).toBe(val);

    await new Promise((resolve) => setTimeout(resolve, interval * 2));
    const reaped = cache.get(key);
    expect(reaped).toBe(undefined);

    cache.stopReapLoop();
});