import { ParsedUrlQueryInput } from "node:querystring"
import { UrlObject } from "url"

/**
 * <p>
 * Route type that is going to be used primarily for routing purposes.
 * </p>
 * <p>
 *   Although nextjs registers routes using physical file path system, this type will offer autocompletion when using
 * </p>
 * <pre>
 *   router.push(...)
 * </pre>
 * or links
 * <pre>
 *   <Link href={urlTo(routes.homeRoute, variables, searchParams)}>my link</Link>
 * </pre>
 * <p>Example:</p>
 * <pre>
 *   const homeRoute: Route<
 *    {param1: string, param2: number},
 *    {id: number, name: string}
 *    > = {
 *      path: "/home/:id/details/:name/edit"
 *    }
 * </pre>
 * <p>Results in path: "http:localhost:3000/home/123/details/johndoe/edit"</p>
 */
export type Route<SEARCH_PARAMS extends ParsedUrlQueryInput = {}, VARIABLES extends object = {}> = {
  path: string
}

/**
 * Creates url object based on the passed Route input.
 * Note: if variables object contains same key as the one from searchParams, variables take precedence.
 * @param route route which is used for typing support and path
 * @param variables mandatory values of the path (if route describes them), can default to an empty object
 * @param searchParams optional parameters used as query parameters in the url path
 */
export function urlTo<SEARCH_PARAMS extends ParsedUrlQueryInput, VARIABLES extends object>(
  route: Route<SEARCH_PARAMS, VARIABLES>,
  variables: VARIABLES,
  searchParams?: SEARCH_PARAMS
): UrlObject {
  return { href: route.path, query: { ...searchParams, ...variables } }
}
