import { createContainer } from "@evyweb/ioctopus";
import { SYMBOLS } from "./di.types";
import { createTagsModule } from "./modules/tag.module";
import { DI_TYPES } from "./di.types";

const AppContainer = createContainer();

AppContainer.load(Symbol.for('TagsModule'), createTagsModule());

export function getInjection<K extends keyof typeof SYMBOLS>(symbol: K): DI_TYPES[K] {
    return AppContainer.get(SYMBOLS[symbol])
}