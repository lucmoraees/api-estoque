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

export const validateFiltersQuery = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    pagina: Joi.string().allow().default(1),
    quantidade: Joi.string().allow().default(10),
    columnToOrder: Joi.string().allow().default('codigo'),
    order: Joi.string().allow().default('ASC'),
    column: Joi.string().allow().default('codigo'),
    value: Joi.string().allow().default('%'),
    operacao: Joi.string().allow().default('contendo'),
  })
});

export const validateUpdateProduto = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    codigo: Joi.string().required().messages({
      'any.required': 'Código é obrigatório!',
    }),
  }),
  [Segments.BODY]: Joi.object().keys({
    descricao: Joi.string().allow(),
    peso: Joi.number().allow(),
    preco: Joi.number().allow(),
    tipoEmbalagem: Joi.number().allow(),
    quantidadeEmbalagem: Joi.number().allow(),
  })
});
