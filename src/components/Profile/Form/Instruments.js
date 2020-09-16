import React from 'react'
import { Form } from 'react-bootstrap'

const Instruments = props => {
  return (
    <Form.Group controlId="instrument">
      <Form.Control as="select" name="instrument" onChange={props.change}>
        <option>Instrument</option>
        <option>Accordion</option>
        <option>Bagpipes</option>
        <option>Banjo</option>
        <option>Bass guitar</option>
        <option>Bassoon</option>
        <option>Bongo</option>
        <option>Cello</option>
        <option>Clarinet</option>
        <option>Didgeridoo</option>
        <option>Drum kit</option>
        <option>Euphonium</option>
        <option>Fiddle</option>
        <option>Flute</option>
        <option>French horn</option>
        <option>Guitar</option>
        <option>Harmonica</option>
        <option>Harp</option>
        <option>Mandolin</option>
        <option>Marimba</option>
        <option>Oboe</option>
        <option>Ocarina</option>
        <option>Organ</option>
        <option>Pan Pipes</option>
        <option>Piano</option>
        <option>Piccolo</option>
        <option>Recorder</option>
        <option>Saxophone</option>
        <option>Sitar</option>
        <option>Singing</option>
        <option>Synthesizer</option>
        <option>Tabla</option>
        <option>Timpani</option>
        <option>Trombone</option>
        <option>Trumpet</option>
        <option>Theremin</option>
        <option>Tuba</option>
        <option>Ukulele</option>
        <option>Viola</option>
        <option>Violin</option>
        <option>Xylophone</option>
      </Form.Control>
    </Form.Group>
  )
}

export default Instruments
