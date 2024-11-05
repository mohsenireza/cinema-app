const reactRouterDom = jest.requireActual('react-router-dom');

const useParams = jest.fn();
const useNavigate = jest.fn().mockReturnValue(jest.fn());

module.exports = {
  ...reactRouterDom,
  useParams,
  useNavigate
};
