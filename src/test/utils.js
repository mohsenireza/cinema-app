import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const AllTheProviders = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        {children}
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
