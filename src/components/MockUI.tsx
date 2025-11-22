export default function MockUi () {
    return(
        <div className="h-48 rounded-2xl bg-white/60 dark:bg-black/30 dark:border
        dark:border-white/10
        backdrop-blur-md p-4 flex flex-col gap-2">

            <div className="h-3 w-1/2 rounded bg-black/10 dark:bg-white/10"></div>
            <div className="h-3 w-2/3 rounded bg-black/10 dark:bg-white/10"></div>

            <div className="h-20 w-full rounded-xl bg-black/5 dark:bg-white/5 mt-2"></div>

            <div className="flex gap-2 mt-2">
                <div className="h-3 w-1/3 rounded bg-black/10 dark:bg-white/10"></div>
                <div className="h-3 w-1/4 rounded bg-black/10 dark:bg-white/10"></div>
                <div className="h-3 w-1/5 rounded bg-black/10 dark:bg-white/10"></div>
            </div>
        </div>


    )
}