import useTypedRouter from "router/useTypedRouter"
import routes from "router/routes"

export default function HomePage() {
  const router = useTypedRouter(routes.home)

  return <div className={"text-2xl"}>Hello world</div>
}
