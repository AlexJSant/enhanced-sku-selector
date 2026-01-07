import React, { FC, useEffect } from 'react'
import classNames from 'classnames'
import { useSKUSelectorCssHandles } from '../SKUSelectorCssHandles'

export const CSS_HANDLES = [
  'imageModal',
  'imageModalOverlay',
  'imageModalContent',
  'imageModalCloseButton',
  'imageModalImage',
  'imageModalLabel',
] as const

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  imageLabel?: string | null
  variationValue?: string
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageLabel,
  variationValue,
}) => {
  const { handles } = useSKUSelectorCssHandles()

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className={classNames(handles.imageModal, 'fixed top-0 left-0 w-100 h-100 z-9999')}
      style={{ zIndex: 99999 }}
    >
      {/* Overlay */}
      <div
        className={classNames(
          handles.imageModalOverlay,
          'fixed top-0 left-0 w-100 h-100 bg-black-70'
        )}
        onClick={onClose}
        style={{ zIndex: 99998 }}
      />

      {/* Modal Content */}
      <div
        className={classNames(
          handles.imageModalContent,
          'fixed bg-base br3 pa4 shadow-5'
        )}
        style={{
          // transform: 'translate(-50%, -50%)',
          // maxWidth: '90vw',
          // maxHeight: '90vh',
          zIndex: 99999,
          overflow: 'auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className={classNames(
            handles.imageModalCloseButton,
            'absolute top-0 right-0 ma2 bn bg-transparent pointer c-muted-1 hover-c-action-primary'
          )}
          onClick={onClose}
          aria-label="Fechar"
          style={{
            fontSize: '2rem',
            lineHeight: '1',
            width: '2rem',
            height: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ×
        </button>

        {/* Image Container */}
        <div className="flex flex-column items-center">
          <img
            src={imageUrl}
            alt={imageLabel || variationValue || 'Imagem do produto'}
            className={classNames(handles.imageModalImage, 'mw-100')}
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'contain',
            }}
          />

          {/* Label */}
          {(variationValue || imageLabel) && (
            <div
              className={classNames(
                handles.imageModalLabel,
                'mt3 tc t-body c-on-base'
              )}
            >
              {variationValue || imageLabel}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ImageModal


