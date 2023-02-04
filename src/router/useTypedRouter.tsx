import { NextRouter, useRouter } from "next/router"
import { Route } from "router/router"
import { ParsedUrlQueryInput } from "node:querystring"

export default function useTypedRouter<SEARCH_PARAMS extends ParsedUrlQueryInput, VARIABLES extends object>(
  _route: Route<SEARCH_PARAMS, VARIABLES>
): NextRouter & {
  variables: VARIABLES
  searchParams: SEARCH_PARAMS
} {
  const router = useRouter()

  return { ...router, variables: router.query as VARIABLES, searchParams: router.query as SEARCH_PARAMS }
}
