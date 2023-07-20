import Link from "next/link";

export const SideNavigation = () => {
    const navigationOptions = [
        {name: "Home", slug: "/"},
        {name: "Scrape", slug: "/scrape"},
        {name: "Analysis", slug: "/analysis"},
        {name: "Visualizations", slug: "/vis"}]
    return (
        <div className='w-48'>
            <div className='flex flex-col gap-12'>
                {navigationOptions.map((option, index) => (
                    <div key={index}>
                        <Link href={option.slug}>
                            {option.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}