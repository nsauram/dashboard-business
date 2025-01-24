import { Button } from "@/components/ui/button"
import CardSummary from "@/app/(routes)/components/CardSummary/CardSummary"
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react"

export const dataCardsSummary = [
  {
    icon: UserRound,
    total: "12,450",
    average: 15,
    title: "Companies created",
    tooltipText: "See all of the companies created"
  },
  {
    icon: Waypoints,
    total: "86,5%",
    average: 80,
    title: "Revenue",
    tooltipText: "See all of the summary"
  },
  {
    icon: BookOpenCheck,
    total: "363,85€",
    average: 30,
    title: "Bounce Rate",
    tooltipText: "See all of the bounce rate"
  }
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-20">
        {dataCardsSummary.map(({ icon, total, average, title, tooltipText }) => (
          <CardSummary
            key={title}
            icon={icon}
            total={total}
            average={average}
            title={title}
            tooltipText={tooltipText}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 mt-12 xl:grid-cols-2 md:gap-x-10">
        <p>Last customer</p>
        <p>Sales distribution</p>
      </div>
    </div>
  )
}
