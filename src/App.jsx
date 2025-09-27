function App() {
  return (
    <>
      {/* Header */}
      <div className="container-fluid px-0">
        <header
          className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 shadow-lg"
          style={{
            background: "#181c24",
            borderBottom: "2px solid #00ff99",
            paddingLeft: "3vw",
            paddingRight: "3vw",
          }}
        >
          <div className="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
            <a
              href="/"
              className="d-inline-flex align-items-center text-decoration-none"
              style={{
                color: "#00ff99",
                fontWeight: 700,
                fontSize: "2rem",
                letterSpacing: "2px",
                textShadow: "0 0 8px #00ff99, 0 0 2px #fff",
              }}
            >
              <i
                className="fa-solid fa-gamepad fa-2xl me-2"
                style={{
                  color: "#00ff99",
                  filter: "drop-shadow(0 0 6px #00ff99)",
                }}
              ></i>
              Heathcliff Store
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#"
                className="nav-link px-3 text-light fw-bold"
                style={{ fontSize: "1.1rem", transition: "color 0.2s" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link px-3 text-light fw-bold"
                style={{ fontSize: "1.1rem", transition: "color 0.2s" }}
              >
                Book
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="nav-link px-3 text-light fw-bold"
                style={{ fontSize: "1.1rem", transition: "color 0.2s" }}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link px-3 text-light fw-bold"
                style={{ fontSize: "1.1rem", transition: "color 0.2s" }}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end d-flex justify-content-end align-items-center gap-2">
            <button
              type="button"
              className="btn btn-outline-light border-2"
              style={{
                borderColor: "#00ff99",
                color: "#00ff99",
                fontWeight: 600,
                boxShadow: "0 0 8px #00ff99",
              }}
            >
              Login
            </button>
            <button
              type="button"
              className="btn"
              style={{
                background: "linear-gradient(90deg,#00ff99,#00bfff)",
                color: "#181c24",
                fontWeight: 700,
                boxShadow: "0 0 8px #00ff99",
              }}
            >
              Register
            </button>
          </div>
        </header>
        {/* Hero */}
        <div
          className="container-fluid px-0"
          style={{
            background: "linear-gradient(120deg,#181c24 70%,#00ff99 200%)",
            minHeight: 420,
            boxShadow: "0 0 32px #00ff99",
          }}
        >
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1
                  className="display-2 fw-bold lh-1 mb-4"
                  style={{
                    color: "#00ff99",
                    textShadow: "0 0 16px #00ff99, 0 0 2px #fff",
                  }}
                >
                  Welcome to{" "}
                  <span
                    style={{ color: "#fff", textShadow: "0 0 8px #00ff99" }}
                  >
                    Heathcliff Store
                  </span>
                </h1>
                <p
                  className="lead mb-4"
                  style={{
                    color: "#baffea",
                    fontSize: "1.5rem",
                    textShadow: "0 0 4px #00ff99",
                  }}
                >
                  Your one-stop shop for the ultimate{" "}
                  <span style={{ color: "#00bfff", fontWeight: 700 }}>
                    PC gaming
                  </span>{" "}
                  experience! Discover the latest gaming PCs, high-performance
                  components, and exclusive accessories to level up your setup.
                </p>
                <div className="d-flex gap-3 mb-4">
                  <button
                    type="button"
                    className="btn btn-lg fw-bold"
                    style={{
                      background: "linear-gradient(90deg,#00ff99,#00bfff)",
                      color: "#181c24",
                      boxShadow: "0 0 12px #00ff99",
                      fontSize: "1.2rem",
                    }}
                  >
                    <i className="fa-solid fa-cart-shopping me-2"></i> Shop Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg px-4 fw-bold"
                    style={{
                      borderColor: "#00ff99",
                      color: "#00ff99",
                      fontSize: "1.2rem",
                      boxShadow: "0 0 8px #00ff99",
                    }}
                  >
                    <i className="fa-solid fa-circle-info me-2"></i> Learn More
                  </button>
                </div>
              </div>
              <div className="col-lg-5 text-center">
                <img
                  className="rounded-4 border border-3 border-success shadow-lg"
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=720&q=80"
                  alt="Gaming PC Setup"
                  width="100%"
                  style={{ maxWidth: 420, boxShadow: "0 0 32px #00ff99" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Product List */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Featured Gaming Products</h1>
              <p className="lead text-body-secondary">
                Explore our best-selling gaming PCs, graphics cards, and
                accessories. Only the best for your ultimate gaming rig!
              </p>
              <p>
                <a href="#" className="btn btn-success my-2 m-2">
                  View All Products
                </a>
                <a href="#" className="btn btn-outline-dark my-2">
                  Custom Build
                </a>
              </p>
            </div>
          </div>
        </section>
        <div
          className="album py-5"
          style={{
            background: "linear-gradient(120deg,#181c24 70%,#00ff99 200%)",
          }}
        >
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {" "}
              <div className="col">
                {" "}
                <div className="card shadow-lg border-0 position-relative product-card-gaming">
                  <span
                    className="badge position-absolute top-0 start-0 m-2 px-3 py-2 bg-success text-dark fw-bold"
                    style={{ fontSize: "0.9rem", boxShadow: "0 0 8px #00ff99" }}
                  >
                    NEW
                  </span>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="card-img-top"
                    alt="High-end Gaming PC"
                    height="225"
                    style={{
                      objectFit: "cover",
                      borderRadius: "1rem 1rem 0 0",
                      boxShadow: "0 0 16px #00ff99",
                    }}
                  />
                  <div
                    className="card-body bg-dark text-light rounded-bottom"
                    style={{
                      borderBottomLeftRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }}
                  >
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#00ff99",
                        textShadow: "0 0 8px #00ff99",
                      }}
                    >
                      Heathcliff Xtreme Gaming PC
                    </h5>
                    <p className="card-text">
                      Intel i9, RTX 4090, 32GB RAM, 2TB SSD. Unmatched
                      performance for pro gamers.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-success fw-bold"
                          style={{ boxShadow: "0 0 8px #00ff99" }}
                        >
                          <i className="fa-solid fa-cart-shopping me-1"></i> Buy
                          Now
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-light fw-bold"
                          style={{ borderColor: "#00ff99", color: "#00ff99" }}
                        >
                          Details
                        </button>
                      </div>
                      <span className="badge bg-dark text-success border border-success">
                        Ready Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-lg border-0 position-relative product-card-gaming">
                  <span
                    className="badge position-absolute top-0 start-0 m-2 px-3 py-2 bg-warning text-dark fw-bold"
                    style={{ fontSize: "0.9rem", boxShadow: "0 0 8px #ffe066" }}
                  >
                    BEST SELLER
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
                    className="card-img-top"
                    alt="Gaming Keyboard"
                    height="225"
                    style={{
                      objectFit: "cover",
                      borderRadius: "1rem 1rem 0 0",
                      boxShadow: "0 0 16px #00ff99",
                    }}
                  />
                  <div
                    className="card-body bg-dark text-light rounded-bottom"
                    style={{
                      borderBottomLeftRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }}
                  >
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#ffe066",
                        textShadow: "0 0 8px #ffe066",
                      }}
                    >
                      RGB Mechanical Keyboard
                    </h5>
                    <p className="card-text">
                      Customizable RGB, blue switches, anti-ghosting. Perfect
                      for fast-paced gaming.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-warning fw-bold"
                          style={{
                            boxShadow: "0 0 8px #ffe066",
                            color: "#181c24",
                          }}
                        >
                          <i className="fa-solid fa-cart-shopping me-1"></i> Buy
                          Now
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-light fw-bold"
                          style={{ borderColor: "#ffe066", color: "#ffe066" }}
                        >
                          Details
                        </button>
                      </div>
                      <span className="badge bg-dark text-warning border border-warning">
                        Best Seller
                      </span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-lg border-0 position-relative product-card-gaming">
                  <span
                    className="badge position-absolute top-0 start-0 m-2 px-3 py-2 bg-danger text-light fw-bold"
                    style={{ fontSize: "0.9rem", boxShadow: "0 0 8px #ff3860" }}
                  >
                    HOT ITEM
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                    className="card-img-top"
                    alt="Gaming Mouse"
                    height="225"
                    style={{
                      objectFit: "cover",
                      borderRadius: "1rem 1rem 0 0",
                      boxShadow: "0 0 16px #00ff99",
                    }}
                  />
                  <div
                    className="card-body bg-dark text-light rounded-bottom"
                    style={{
                      borderBottomLeftRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }}
                  >
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#ff3860",
                        textShadow: "0 0 8px #ff3860",
                      }}
                    >
                      Ultra-light Gaming Mouse
                    </h5>
                    <p className="card-text">
                      16000 DPI, customizable buttons, ergonomic design.
                      Precision for every game.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-danger fw-bold"
                          style={{
                            boxShadow: "0 0 8px #ff3860",
                            color: "#fff",
                          }}
                        >
                          <i className="fa-solid fa-cart-shopping me-1"></i> Buy
                          Now
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-light fw-bold"
                          style={{ borderColor: "#ff3860", color: "#ff3860" }}
                        >
                          Details
                        </button>
                      </div>
                      <span className="badge bg-dark text-danger border border-danger">
                        Hot Item
                      </span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-lg border-0 position-relative product-card-gaming">
                  <span
                    className="badge position-absolute top-0 start-0 m-2 px-3 py-2 bg-info text-dark fw-bold"
                    style={{ fontSize: "0.9rem", boxShadow: "0 0 8px #00bfff" }}
                  >
                    TOP RATED
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                    className="card-img-top"
                    alt="Gaming Headset"
                    height="225"
                    style={{
                      objectFit: "cover",
                      borderRadius: "1rem 1rem 0 0",
                      boxShadow: "0 0 16px #00ff99",
                    }}
                  />
                  <div
                    className="card-body bg-dark text-light rounded-bottom"
                    style={{
                      borderBottomLeftRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }}
                  >
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#00bfff",
                        textShadow: "0 0 8px #00bfff",
                      }}
                    >
                      Surround Sound Headset
                    </h5>
                    <p className="card-text">
                      7.1 surround, noise-cancelling mic, ultra comfort. Hear
                      every detail in-game.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-info fw-bold"
                          style={{
                            boxShadow: "0 0 8px #00bfff",
                            color: "#181c24",
                          }}
                        >
                          <i className="fa-solid fa-cart-shopping me-1"></i> Buy
                          Now
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-light fw-bold"
                          style={{ borderColor: "#00bfff", color: "#00bfff" }}
                        >
                          Details
                        </button>
                      </div>
                      <span className="badge bg-dark text-info border border-info">
                        Top Rated
                      </span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-lg border-0 position-relative product-card-gaming">
                  <span
                    className="badge position-absolute top-0 start-0 m-2 px-3 py-2 bg-primary text-light fw-bold"
                    style={{ fontSize: "0.9rem", boxShadow: "0 0 8px #007bff" }}
                  >
                    NEW ARRIVAL
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80"
                    className="card-img-top"
                    alt="Gaming Monitor"
                    height="225"
                    style={{
                      objectFit: "cover",
                      borderRadius: "1rem 1rem 0 0",
                      boxShadow: "0 0 16px #00ff99",
                    }}
                  />
                  <div
                    className="card-body bg-dark text-light rounded-bottom"
                    style={{
                      borderBottomLeftRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }}
                  >
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#007bff",
                        textShadow: "0 0 8px #007bff",
                      }}
                    >
                      4K 144Hz Gaming Monitor
                    </h5>
                    <p className="card-text">
                      27" UHD, 144Hz refresh, 1ms response. Smooth visuals for
                      competitive gaming.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-primary fw-bold"
                          style={{
                            boxShadow: "0 0 8px #007bff",
                            color: "#fff",
                          }}
                        >
                          <i className="fa-solid fa-cart-shopping me-1"></i> Buy
                          Now
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-light fw-bold"
                          style={{ borderColor: "#007bff", color: "#007bff" }}
                        >
                          Details
                        </button>
                      </div>
                      <span className="badge bg-dark text-primary border border-primary">
                        New Arrival
                      </span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                {" "}
                <div className="card shadow-lg border-0 position-relative product-card-gaming">
                  <span
                    className="badge position-absolute top-0 start-0 m-2 px-3 py-2 bg-secondary text-light fw-bold"
                    style={{ fontSize: "0.9rem", boxShadow: "0 0 8px #6c757d" }}
                  >
                    RECOMMENDED
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
                    className="card-img-top"
                    alt="Gaming Chair"
                    height="225"
                    style={{
                      objectFit: "cover",
                      borderRadius: "1rem 1rem 0 0",
                      boxShadow: "0 0 16px #00ff99",
                    }}
                  />
                  <div
                    className="card-body bg-dark text-light rounded-bottom"
                    style={{
                      borderBottomLeftRadius: "1rem",
                      borderBottomRightRadius: "1rem",
                    }}
                  >
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#6c757d",
                        textShadow: "0 0 8px #6c757d",
                      }}
                    >
                      Ergonomic Gaming Chair
                    </h5>
                    <p className="card-text">
                      Adjustable, lumbar support, premium materials. Game in
                      comfort for hours.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-secondary fw-bold"
                          style={{
                            boxShadow: "0 0 8px #6c757d",
                            color: "#fff",
                          }}
                        >
                          <i className="fa-solid fa-cart-shopping me-1"></i> Buy
                          Now
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-light fw-bold"
                          style={{ borderColor: "#6c757d", color: "#6c757d" }}
                        >
                          Details
                        </button>
                      </div>
                      <span className="badge bg-dark text-secondary border border-secondary">
                        Recommended
                      </span>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        {/* Team Section */}
        <section
          id="team"
          className="py-5"
          style={{
            background: "linear-gradient(120deg,#181c24 70%,#00ff99 200%)",
          }}
        >
          <div className="container">
            <h2
              className="text-center mb-5 fw-bold"
              style={{ color: "#00ff99", textShadow: "0 0 12px #00ff99" }}
            >
              Meet Our Team
            </h2>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4">
                <div
                  className="card h-100 shadow-lg text-center border-0"
                  style={{
                    background: "#23272f",
                    boxShadow: "0 0 24px #00ff99",
                  }}
                >
                  <img
                    src="https://api.dicebear.com/7.x/bottts/svg?seed=aditya&backgroundColor=181c24,00ff99&radius=50"
                    className="card-img-top mx-auto mt-4 mb-2 rounded-circle border border-3 border-success"
                    alt="Team 1"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      boxShadow: "0 0 16px #00ff99",
                    }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title fw-bold"
                      style={{
                        color: "#00ff99",
                        textShadow: "0 0 8px #00ff99",
                      }}
                    >
                      Aditya Febriadi
                    </h5>
                    <p className="card-text text-light">Founder & PC Builder</p>
                    <p className="text-success small">
                      "Passionate about building the best gaming rigs for every
                      gamer."
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-5"
          style={{
            background: "linear-gradient(120deg,#181c24 70%,#00ff99 200%)",
          }}
        >
          <div className="container">
            <h2
              className="text-center mb-5 fw-bold"
              style={{ color: "#00ff99", textShadow: "0 0 12px #00ff99" }}
            >
              Contact Us
            </h2>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form
                  className="p-4 p-md-5 border-0 rounded-4 shadow-lg"
                  style={{
                    background: "#23272f",
                    boxShadow: "0 0 24px #00ff99",
                  }}
                >
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="form-label text-light fw-bold"
                    >
                      <i className="fa-solid fa-user me-2 text-success"></i>Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light border-success"
                      id="name"
                      placeholder="Your Name"
                      required
                      style={{ boxShadow: "0 0 8px #00ff99" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label text-light fw-bold"
                    >
                      <i className="fa-solid fa-envelope me-2 text-info"></i>
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control bg-dark text-light border-info"
                      id="email"
                      placeholder="you@email.com"
                      required
                      style={{ boxShadow: "0 0 8px #00bfff" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="message"
                      className="form-label text-light fw-bold"
                    >
                      <i className="fa-solid fa-message me-2 text-warning"></i>
                      Message
                    </label>
                    <textarea
                      className="form-control bg-dark text-light border-warning"
                      id="message"
                      rows="4"
                      placeholder="Type your message..."
                      required
                      style={{ boxShadow: "0 0 8px #ffe066" }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 fw-bold"
                    style={{
                      background: "linear-gradient(90deg,#00ff99,#00bfff)",
                      color: "#181c24",
                      boxShadow: "0 0 12px #00ff99",
                      fontSize: "1.1rem",
                    }}
                  >
                    <i className="fa-solid fa-paper-plane me-2"></i>Send Message
                  </button>
                </form>
                <div className="mt-4 text-center text-light">
                  <p className="mb-1">
                    <i className="fa-solid fa-envelope me-2 text-info"></i>
                    <strong>Email:</strong> support@heathcliffstore.com
                  </p>
                  <p className="mb-1">
                    <i className="fa-solid fa-phone me-2 text-success"></i>
                    <strong>Phone:</strong> +62 812-3456-7890
                  </p>
                  <p className="mb-0">
                    <i className="fa-solid fa-location-dot me-2 text-danger"></i>
                    <strong>Address:</strong> Jl. Gaming No. 123, Jakarta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="container-fluid px-0">
          {" "}
          <footer
            className="py-4 border-top"
            style={{
              background: "linear-gradient(120deg,#181c24 70%,#00ff99 200%)",
              boxShadow: "0 0 24px #00ff99",
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 mb-3 mb-md-0 text-center text-md-start">
                  <span
                    className="fw-bold"
                    style={{ color: "#00ff99", textShadow: "0 0 8px #00ff99" }}
                  >
                    Heathcliff Store
                  </span>{" "}
                  &copy; 2025. All rights reserved.
                  <br />
                  <small className="text-light">
                    <i className="fa-solid fa-envelope me-1 text-info"></i>{" "}
                    support@heathcliffstore.com
                    <span className="mx-2">|</span>
                    <i className="fa-solid fa-phone me-1 text-success"></i> +62
                    812-3456-7890
                  </small>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="me-2"
                      title="Instagram"
                      style={{
                        color: "#ff3860",
                        fontSize: "1.5rem",
                        textShadow: "0 0 8px #ff3860",
                      }}
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="me-2"
                      title="Facebook"
                      style={{
                        color: "#00bfff",
                        fontSize: "1.5rem",
                        textShadow: "0 0 8px #00bfff",
                      }}
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="me-2"
                      title="Twitter"
                      style={{
                        color: "#ffe066",
                        fontSize: "1.5rem",
                        textShadow: "0 0 8px #ffe066",
                      }}
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a
                      href="#"
                      title="YouTube"
                      style={{
                        color: "#ff0000",
                        fontSize: "1.5rem",
                        textShadow: "0 0 8px #ff0000",
                      }}
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <ul className="nav justify-content-center justify-content-md-end">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link px-2 text-light fw-bold"
                        style={{ textShadow: "0 0 4px #00ff99" }}
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#team"
                        className="nav-link px-2 text-light fw-bold"
                        style={{ textShadow: "0 0 4px #00ff99" }}
                      >
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#contact"
                        className="nav-link px-2 text-light fw-bold"
                        style={{ textShadow: "0 0 4px #00ff99" }}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;