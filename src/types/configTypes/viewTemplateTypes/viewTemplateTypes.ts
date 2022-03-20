import TEMPLATE_CONSTANT from '../../../constants/config/viewTemplate/viewTemplate'

type page = typeof TEMPLATE_CONSTANT.PAGE
type modal = typeof TEMPLATE_CONSTANT.MODAL
type block = typeof TEMPLATE_CONSTANT.BLOCK

type ModalOrPage = modal | page
type BlockOrPage = block | page

export type TemplateConfig = {
  registration: ModalOrPage
  feedback: ModalOrPage
  FAQ: BlockOrPage
}
