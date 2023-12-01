import { PrivateGuard } from '@guards'
import { render, renderHook } from '@testing-library/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { act } from 'react-dom/test-utils'

describe('PrivateGuard', () => {
  test('Should be render children if is authenticated', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Routes>
          <Route Component={PrivateGuard}>
            <Route path="/" element={<p>test</p>} />
          </Route>
        </Routes>
      </BrowserRouter>,
    )

    const page = getByText('test')

    expect(page).toBeVisible()
  })

  //   test('Should be redirect if is not autheticated', () => {
  //     const { queryByText } = render(
  //       <BrowserRouter>
  //         <Routes>
  //           <Route Component={PrivateGuard}>
  //             <Route path="/" element={<p>test</p>} />
  //           </Route>
  //         </Routes>
  //       </BrowserRouter>,
  //     )

  //     expect(queryByText('test')).toBe(null)
  //   })
})
