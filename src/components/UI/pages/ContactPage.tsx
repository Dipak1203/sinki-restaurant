const ContactPage = () => {
  const inputCss: string = `mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500
`;
  return (
    <div className="mt-3 container">
      <main className="flex justify-betweeen gap-12">
        <form>
          <div className="flex gap-2">
            <input
              type="text"
              className={`${inputCss}`}
              placeholder="first name"
            />
            <input
              type="text"
              className={`${inputCss}`}
              placeholder="middle name"
            />
            <input
              type="text"
              className={`${inputCss}`}
              placeholder="last name"
            />
          </div>
          <div className="mt-3">
            <input
              type="email"
              placeholder="email address"
              className={`${inputCss}`}
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Phone Number"
              className={`${inputCss}`}
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Subject"
              className={`${inputCss}`}
            />
          </div>
          <div className="mt-3">
            <textarea
              rows={6}
              cols={9}
              className={`${inputCss}`}
              placeholder="your message here ....."
            ></textarea>
          </div>
          <div className="mt-3">
            <button className="bg-white hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Submit
            </button>
          </div>
        </form>

        <section>
          <div>
            <h2>Location</h2>
            <p>Koteshwor-32 Mahadesthan Mandir, Kathmandu</p>
          </div>

          <div className="mt-5">
            <h2>Hour</h2>
            <p>
              Open every day for breakfast, brunch, <br />
              lunch and dinner from 8 am to 9 pm.
            </p>
          </div>
          <div className="mt-5">
            <h2>Contact</h2>
            <p>Phone: +9779866916005,+9779806268570</p>

            <p>Email: dipakkumal673@gmail.com, mailsinki@sinkirestaurant.com</p>
            <p>Facebook: @sinkirestaurantnepal</p>
            <p>Instagram: @sinki.restaurant</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
