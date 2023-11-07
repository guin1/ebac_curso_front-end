import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

type Props = {
  favorito?: ProdutoType[]
}

const ProdutosComponent = ({ favorito = [] }: Props) => {
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favorito.map((f: ProdutoType) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  if (isLoading || produtos === undefined) {
    return <h2>Carregando...</h2>
  }

  if (isError) {
    return (
      <h2>
        Erro ao carregar os produtos. Verifique sua conexão ou tente novamente
        mais tarde.
      </h2>
    )
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto: ProdutoType) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
