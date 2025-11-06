

export default function Footer(){
    return(
        <footer className="py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-neutral-700 p-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
                    <div>© {new Date().getFullYear()} Javier Golpe Juarez. All rights reserved.</div>
                    <div className="flex gap-3">
                        <a className="underline" href="#">Privacy</a>
                        <a className="underline" href="#">Imprint</a>
                        <a className="underline" href="#top">Back to top</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}