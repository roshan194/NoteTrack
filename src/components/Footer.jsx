function Footer() {
    const year = new Date().getFullYear();
    console.log(year);
    return ("Copyright " + year);
}

export default Footer;