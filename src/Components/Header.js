import url from "./assets/Logo.svg";

function Header () {
    return (
        <header>
            <img src={url} alt="Little Lemon Logo"></img>
        </header>
    );
}

export default Header;