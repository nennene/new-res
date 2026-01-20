import pic from './assets/ill.jpg';
function about () {
    return (
        <div>
        <section className="about-section bg-pink-200 p-10 text-center">
            <h1 className="text-black text-lg font-bold">About Us</h1>
            <p className="p-10">Learn more about our mission, values, and the team dedicated to providing you with the best experience possible.</p>
            <img src={pic} className='w-100'alt="" />
            <figure className="figure">
  <blockquote className="blockquote">
    <p className="text-black text-lg font-bold">"Quality is not an act, it is a habit."</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    Aristotle
  </figcaption>
</figure>
            <p className="p-10">Our story began with a simple idea: to create a space where community and quality come together. Over the years, we have grown into a beloved establishment known for our commitment to excellence and customer satisfaction. Our team is passionate about what we do, and we strive to make every visit memorable.</p>

        </section>
        </div>
    );
}
export default about;