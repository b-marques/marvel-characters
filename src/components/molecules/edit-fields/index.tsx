import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'

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
  const [name, setName] = useState(character.name)
  const [image, setImage] = useState(character.image)
  const [description, setDescription] = useState(character.description)
  const [isOpenDialog, setIsOpenDialog] = useState(false)

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
    setIsOpenDialog(true)
  }

  const handleClose = () => {
    setIsOpenDialog(false)
  }

  return (
    <>
      <form className={classProps}>
        <TextField
          className={styles.input}
          disabled
          id="character-id"
          label="ID do Personagem"
          defaultValue={character.id}
        />
        <TextField
          variant="filled"
          className={styles.input}
          id="character-name"
          label="Nome do Personagem"
          defaultValue={character.name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          variant="filled"
          className={styles.input}
          id="character-image"
          label="Imagem do Personagem"
          defaultValue={character.image}
          onChange={e => setImage(e.target.value)}
        />
        <TextField
          variant="filled"
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
      </form>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpenDialog}>
        <DialogTitle id="customized-dialog-title">Salvo com sucesso!</DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EditFields
