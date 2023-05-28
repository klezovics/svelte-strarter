import {counterStore} from "./store.js";
import {v4} from "node-uuid";

export class StoreProxy {
    constructor(store) {
        this.counterStore = store;
    }

    get state() {
        return this.counterStore.getState();
    }

    get subscribe() {
        return this.counterStore.subscribe;
    }

    addCounter() {
        counterStore.update(value => {
            return [...value, {id: v4(), count: 0}];
        });
    }

    clearCounters() {
        counterStore.update(value => {
            return [];
        });
    }

    incrementCounter(id) {
        counterStore.update(counters => {
            return counters.map(counter => {
                if (counter.id === id) {
                    return {...counter, count: counter.count + 1};
                }
                return counter;
            });
        });
    }

    decrementCounter(id) {
        counterStore.update(value => {
            return value.map(counter => {
                if (counter.id === id) {
                    return {...counter, count: counter.count - 1};
                }
                return counter;
            });
        });
    }
}

export const storeProxy = new StoreProxy(counterStore);
