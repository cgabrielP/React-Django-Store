import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className="pt-3 mt-5">
        <ul className="nav justify-content-evenly border-top bg-light border-top">
          <li className="nav_item">
            <div className="nav p-3 fw-bold">Centro de Ayuda</div>
            <ul className="flex-colum my-2">
              <li className="nav py-2">
                <a className="text-decoration-none text-muted" href="#"
                  >Problemas</a
                >
              </li>
              <li className="nav py-2">
                <a className="text-decoration-none text-muted" href="#"
                  >Informacion de pago</a
                >
              </li>
              <li className="nav py-2">
                <a className="text-decoration-none text-muted" href="#"
                  >Como modificar mis datos</a
                >
              </li>
              <li className="nav py-2">
                <a className="text-decoration-none text-muted" href="#"
                  >Modos de entrega</a
                >
              </li>
              <li className="nav py-2">
                <a className="text-decoration-none text-muted" href="#">Locales</a>
              </li>
            </ul>
          </li>
          <li className="nav_item">
            <div className="nav p-3 fw-bold">Nosotros</div>
            <ul className="flex-colum my-2">
              <li className="nav py-2">
                <a className="text-decoration-none text-muted" href="#"
                  >Compromisos</a
                >
              </li>

              <li className="nav py-2">
                <a className="text-decoration-none text-muted" href="#">Locales</a>
              </li>
              <li className="nav py-2">
                <a className="text-decoration-none text-muted" href="#"
                  >Productos</a
                >
              </li>
              <li className="nav py-2">
                <a className="text-decoration-none text-muted" href="#"
                  >Proveedores</a
                >
              </li>
            </ul>
          </li>

          <li className="nav_item">
            <ul className="flex-colum my-2"></ul>
            <div className="nav pt-3 fw-bold">Siguenos</div>
            <ul className="d-flex my-2">
              <li className="nav-item list-unstyled py-2">
                <a className="text-decoration-none text-muted" href="#"
                  ><i className="fa-brands fa-facebook-f"></i
                ></a>
              </li>
              <li className="nav-item list-unstyled py-2 ms-2">
                <a className="text-decoration-none text-muted" href="#"
                  ><i className="fa-brands fa-instagram"></i
                ></a>
              </li>
              <li className="nav-item list-unstyled py-2 ms-2">
                <a className="text-decoration-none text-muted" href="#"
                  ><i className="fa-brands fa-tiktok"></i
                ></a>
              </li>
            </ul>
            <div className="nav pt-3 fw-bold">Medios de pago</div>
            <ul className="d-flex my-2">
              <li className="nav-item list-unstyled py-2">
                <a className="text-decoration-none text-muted" href="#"
                  ><i className="fa-brands fa-cc-visa"></i
                ></a>
              </li>
              <li className="nav-item list-unstyled py-2 ms-2">
                <a className="text-decoration-none text-muted" href="#"
                  ><i className="fa-brands fa-cc-mastercard"></i
                ></a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </>
  )
}
