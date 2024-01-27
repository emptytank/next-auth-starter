import MainNavigation from "@/app/components/layout/main-navigation";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    return(
        <>
        <MainNavigation />
        <main>{props.children}</main>
        </>
    )
}