import { render, screen } from '@testing-library/react'
import Random from '../component/random/index'

// require("@babel/core").transformSync("code", {
//     plugins: ["@babel/plugin-syntax-jsx"],
//   });

test('input verification', () => {
    render(<Random />)
    const linkElement = screen.getByText(/Obtenir un sujet !/i)
    expect(linkElement).toBeInTheDocument()
})
