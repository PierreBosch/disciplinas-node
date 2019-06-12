const {
    disciplinas: Disciplina,
  } = require('../models')

class DisciplinasController {

    async index(req, res) {
       const disciplinas = await Disciplina.findAll() || []

       return res.render("disciplinas/index", {disciplinas})
    }

    async create(req, res) {
      return res.render("disciplinas/create")
    }

    async findById(req, res) {
      const disciplina = await Disciplina.findByPk(req.params.disciplinaId) || {};

      return res.render("disciplinas/show", { disciplina });
    }

    async store(req, res) {
      await Disciplina.create({nome: req.body.nome, descricao: null })

      return res.redirect("/disciplinas")
    }

    async edit(req, res) {
      return res.render("disciplinas/edit")
    }

    async update(req, res) {
      await Disciplina.update({nome: req.body.nome, descricao: req.body.descricao}, {returning:false, where: {id: req.params.disciplinaId}})

      return res.redirect("/disciplinas")
    }

    async destroy(req, res) {
      await Disciplina.destroy({where: {id: req.params.disciplinaId}})

      return res.redirect("/disciplinas")
    }

  
}

module.exports = new DisciplinasController()