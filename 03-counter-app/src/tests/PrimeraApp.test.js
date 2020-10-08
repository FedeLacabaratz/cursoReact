import React from 'react';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react'; // se quita por ser el metodo de antes
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola, soy Fede"', () => {

    //     const saludo = "Hola, soy Fede"
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />)

    //     expect(getByText(saludo)).toBeInTheDocument();
    // }); // metodo de antes

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, soy Fede';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de enviar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, soy Fede';
        const subtitulo = 'Que lindo subtitulo soy!';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    });
})
