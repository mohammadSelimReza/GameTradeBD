const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer className="footer p-10 max-w-6xl mx-auto text-neutral-content">
        <nav>
          <h6 className="footer-title mb-8">GameTradeBD</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Game Index</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title mb-8">Support</h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">How to buy</a>
          <a className="link link-hover">How to sell</a>
          <a className="link link-hover">Accessiblity Statement</a>
        </nav>
        <nav>
          <h6 className="footer-title mb-8">Legal</h6>
          <a className="link link-hover">User Agreement</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Copyright Policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title mb-8">Payment Method</h6>
          <div className="flex">
            <a className="link link-hover">Bkash</a>
            <a className="link link-hover mx-4">Rocket</a>
            <a className="link link-hover">Nagad</a>
            <a className="link link-hover mx-4">Skrill</a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
