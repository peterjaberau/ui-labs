import { ChatQuestion } from './chat-question.ts'
import { ExplainCodeDetailed } from './explain-code-detailed.ts'
import { ExplainCodeHighLevel } from './explain-code-high-level.ts'
import { FindCodeSmells } from './find-code-smells.ts'
import { GenerateDocstring } from './generate-docstring.ts'
import { GenerateTest } from './generate-test.ts'
import { ImproveVariableNames } from './improve-variable-names.ts'
import type { Recipe, RecipeID } from './recipe.ts'
import { TranslateToLanguage } from './translate.ts'

const registeredRecipes: { [id in RecipeID]?: Recipe } = {}

export function registerRecipe(id: RecipeID, recipe: Recipe): void {
    registeredRecipes[id] = recipe
}

export function getRecipe(id: RecipeID): Recipe | undefined {
    return registeredRecipes[id]
}

function nullLog(filterLabel: string, text: string, ...args: unknown[]): void {
    // Do nothing
}

function init(): void {
    if (Object.keys(registeredRecipes).length > 0) {
        return
    }

    const recipes: Recipe[] = [
        new ChatQuestion(nullLog),
        new ExplainCodeDetailed(),
        new ExplainCodeHighLevel(),
        new GenerateDocstring(),
        new GenerateTest(),
        new ImproveVariableNames(),
        new TranslateToLanguage(),
        new FindCodeSmells(),
    ]

    for (const recipe of recipes) {
        const existingRecipe = getRecipe(recipe.id)
        if (existingRecipe) {
            throw new Error(`Duplicate recipe with ID ${recipe.id}`)
        }
        registerRecipe(recipe.id, recipe)
    }
}

init()
