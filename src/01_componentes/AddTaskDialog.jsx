import Input from "./Input"
import Button from "./Button"
import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import "./AddTaskDialog.css"
import TimeSelect from "./TimeSelect"
import { useEffect, useRef, useState } from "react"

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [time, setTime] = useState("morning")
  const [errors, setErros] = useState([])
  const [title, setTitle] = useState()

  const nodeRef = useRef() // Inicializado com null
  const titleRef = useRef
  const descriptionRef = useRef

  // resetar quando inserir informções na caixa de dialogo
  useEffect(() => {
    if (!isOpen) {
      setTime("morning")
    }
  }, [isOpen])

  function handleSave() {
    const newErrors = []

    const title = titleRef.current.value
    const description = descriptionRef.current.value

    if (!title.trim()) {
      newErrors.push({
        inputName: "title",
        message: "Titulo obrigatorio",
      })
    }

    if (!time.trim()) {
      newErrors.push({
        inputName: "time",
        message: "Time obrigatorio",
      })
    }

    if (!description.trim()) {
      {
        newErrors.push({
          inputName: "description",
          message: "description obrigatorio",
        })
      }
    }
    setErros(newErrors)

    if (newErrors.length > 0) {
      setErros(newErrors)
      return
    }

    handleSubmit({
      id: Math.random(),
      title,
      description,
      time,
      status: "done",
    })
    handleClose()
  }
  const titleError = errors.find((error) => error.inputName == "title")
  const timeError = errors.find((error) => error.inputName == "time")
  const descriptionError = errors.find(
    (error) => error.inputName == "description"
  )

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={1000} // Ajustado para 'timeout' e um valor de exemplo
      classNames="add-task-dialog"
      unmountOnExit
    >
      {/* dialog - Este é o elemento que o CSSTransition irá animar */}
      <div
        ref={nodeRef} // O ref é anexado aqui, ao elemento que será animado
        className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur"
      >
        <div className="rounded-xl bg-white p-5 text-center shadow">
          <h2 className="Text-[#35383E] text-xl font-semibold">Nova Tarefa</h2>
          <p className="mb-4 mt-1 text-[#949c9f]">
            Insira as informações abaixo
          </p>
          <div className="flex w-[336px] flex-col space-y-4">
            <Input
              id="title"
              label="Titulo"
              placeholder="insira o titulo da tarefa"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              error={titleError}
            />

            <TimeSelect
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />

            <Input
              id="description"
              label="Descrição"
              placeholder="Descrição da tarefa"
              errorMessage={descriptionError?.message}
              // ref={descriptionRef}
            />

            <div className="flex gap-3">
              <Button
                size="large"
                className="w-full"
                color="secondary"
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <Button
                size="large"
                className="w-full"
                onClick={handleSave} // Chama a função handleSave que envia os dados
              >
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body
  )
}

export default AddTaskDialog
