import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="text-center">
            <div className="container bg-quaternary-500">
                <div className="min-h-[720px] bg-hero-pattern bg-cover bg-center bg-fixed bg-no-repeat flex-center flex-col gap-y-4">
                    <h2 className="font-extrabold text-quaternary-500 text-shadow-yellow text-7xl">Power up with coffee</h2>
                    <p className="text-tertiary-500 text-2xl">Start your exciting day with a cup of Brew Coffee</p>
                    <Link to="/drinks" className="block px-8 py-3 bg-secondary-500 shadow-md rounded-md shadow-secondary-400 text-white font-medium text-xl hover:bg-secondary-400 transition-all active:bg-secondary-600">
                        Get your life
                    </Link>
                </div>
            </div>
        </main>
    );
}
