import { ToDo } from '@/models';
export declare const useToDoStore: import("pinia").StoreDefinition<"todo-store", {
    id: number;
    list: ToDo[];
}, {}, {
    increment(data: ToDo): void;
    check(id: number): void;
    remove(id: number): void;
}>;
