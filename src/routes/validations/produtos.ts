import { Joi, celebrate, Segments } from 'celebrate';

export const validateCreateProdutoBody = celebrate({
  [Segments.BODY]: Joi.object().keys({
    descricao: Joi.string().required().messages({
      'any.required': 'Descrição é obrigatória!',
    }),
    preco: Joi.number().required().messages({
      'any.required': 'Preço é obrigatório!',
    }),
    tipoEmbalagem: Joi.number().valid(1, 2, 3).required().messages({
      'any.required': 'Tipo da embalagem é obrigatória!',
    }),
    quantidadeEmbalagem: Joi.number().required().messages({
      'any.required': 'Quantidade da embalagem é obrigatória!',
    }),
    peso: Joi.number().required().messages({
      'any.required': 'Peso é obrigatório!',
    }),
  }),
});

export const validateCodigoParams = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    codigo: Joi.string().required().messages({
      'any.required': 'Código é obrigatório!',
    }),
  })
});
