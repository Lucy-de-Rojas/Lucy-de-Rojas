
import Menu from "./Menu";
import Ldr from "./Ldr";
import Logo from "./Logo";
import MenuBurger from "./Menu-Burger";









export default function TopHeader() {






        return (<div
        className="flex w-full items-center justify-between"
        >


                <MenuBurger />
                <Menu />

                {/* <Ldr  /> */}
                <Logo />








        </div>);}