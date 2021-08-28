import React from 'react'
import { render, screen } from '@testing-library/react'
import { Component } from './index'

describe('<Component>', () => {
    it('renders correctly', () => {
        render(<Component />)

        const heading = screen.getByText(/Test/i)
        expect(heading).toBeInTheDocument()
    })
})
