const imgStyle = {
  margin: '30px auto'
};

const DonateLink = () => (
  <a href="https://opencollective.com/idyll/" target="_blank">
    <img
      className="opencollective"
      src="https://opencollective.com/idyll/donate/button@2x.png?color=blue"
      width="200"
      style={imgStyle}
    />
  </a>
);

export default DonateLink;
