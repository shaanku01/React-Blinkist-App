import { render , screen} from '@testing-library/react';
import React from 'react';
import Typography from '../Typography';

describe("Typo-Check",()=>{

    it('h1-check',()=>{
        render(<Typography variant={'h1'} content={'h1-check'} />)
        const ele = screen.getByText('h1-check');
        expect(ele).toBeInTheDocument();
    })

    it('h3-check',()=>{
        render(<Typography variant={'h3'} content={'h3-check'} />)
        const ele = screen.getByText('h3-check');
        expect(ele).toBeInTheDocument();
    })
    it('subtitle2-check',()=>{
        render(<Typography variant={'subtitle2'} content={'subtitle2-check'} />)
        const ele = screen.getByText('subtitle2-check');
        expect(ele).toBeInTheDocument();
    })

    it('subtitle1-check',()=>{
        render(<Typography variant={'subtitle1'} content={'subtitle1-check'} />)
        const ele = screen.getByText('subtitle1-check');
        expect(ele).toBeInTheDocument();
    })

    it('subtitle3-check',()=>{
        render(<Typography variant={'subtitle3'} content={'subtitle3-check'} />)
        const ele = screen.getByText('subtitle3-check');
        expect(ele).toBeInTheDocument();
    })

    it('subtitle5-check',()=>{
        render(<Typography variant={'subtitle5'} content={'subtitle5-check'} />)
        const ele = screen.getByText('subtitle5-check');
        expect(ele).toBeInTheDocument();
    })

    it('body1-check',()=>{
        render(<Typography variant={'body1'} content={'body1-check'} />)
        const ele = screen.getByText('body1-check');
        expect(ele).toBeInTheDocument();
    })

    it('body2-check',()=>{
        render(<Typography variant={'body2'} content={'body2-check'} />)
        const ele = screen.getByText('body2-check');
        expect(ele).toBeInTheDocument();
    })
    it('body3-check',()=>{
        render(<Typography variant={'body3'} content={'body3-check'} />)
        const ele = screen.getByText('body3-check');
        expect(ele).toBeInTheDocument();
    })
    it('caption1-check',()=>{
        render(<Typography variant={'caption1'} content={'caption1-check'} />)
        const ele = screen.getByText('caption1-check');
        expect(ele).toBeInTheDocument();
    })
    it('caption2-check',()=>{
        render(<Typography variant={'caption2'} content={'caption2-check'} />)
        const ele = screen.getByText('caption2-check');
        expect(ele).toBeInTheDocument();
    })

    it('caption3-check',()=>{
        render(<Typography variant={'caption3'} content={'caption3-check'} />)
        const ele = screen.getByText('caption3-check');
        expect(ele).toBeInTheDocument();
    })
    

})