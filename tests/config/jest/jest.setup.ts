import '@testing-library/jest-dom'
import { server } from '../mock-requests'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
