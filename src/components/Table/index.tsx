import * as S from './styles'

type TableProps<T> = {
  data: T[]
}

const Table = <T extends unknown>({ data }: TableProps<T>) => {
  return (
    <S.Wrapper>
      <S.Table></S.Table>
    </S.Wrapper>
  )
}

export default Table
