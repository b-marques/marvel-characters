import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useDispatch } from 'react-redux'

import styles from './styles.module.css'

import { editCharacter } from 'src/store/character/actions'
import { Character } from 'src/store/character/types'

type EditFieldsProps = {
  className?: string
  character: Character
}

const EditFields = (props: EditFieldsProps) => {
  const { className = '', character } = props
  const classProps: string = `${styles.fields} ${className}`
  const dispatch = useDispatch()
  const [description, setDescription] = useState(character.description)
  const [name, setName] = useState(character.name)
  const [image, setImage] = useState(character.image)

  const onClick = () => {
    dispatch(
      editCharacter({
        id: character.id,
        name: name,
        image: image,
        description: description,
        series: [],
      }),
    )
  }

  return (
    <div className={classProps}>
      <TextField
        className={styles.input}
        disabled
        id="character-id"
        label="ID do Personagem"
        defaultValue={character.id}
      />
      <TextField
        className={styles.input}
        id="character-name"
        label="Nome do Personagem"
        defaultValue={character.name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        className={styles.input}
        id="character-image"
        label="Imagem do Personagem"
        defaultValue={character.image}
        onChange={e => setImage(e.target.value)}
      />
      <TextField
        multiline
        rows={4}
        className={styles.input}
        id="character-description"
        label="Descrição do Personagem"
        defaultValue={character.description}
        onChange={e => setDescription(e.target.value)}
      />
      <Button className={styles.button} onClick={onClick}>
        Salvar
      </Button>
    </div>
  )
}

export default EditFields
