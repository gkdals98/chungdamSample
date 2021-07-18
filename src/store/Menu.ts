import { Module, GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex';

// state로 사용할 클래스
export class MenuItem {
    public count = 0;
}

// state를 출력하면서, 표시를 다르게 하기위해 설정(state를 동시에 컴포넌트 이용시)
const getters: GetterTree<MenuItem, any> = {
    doubleCount(state: MenuItem): number {
        return state.count;
    },
};

// state를 바로 변경할 수 없게함. 꼭 mutate를 통해 변경 가능
const mutations: MutationTree<MenuItem> = {
    increment(state: MenuItem, step: number) {
        state.count = state.count + step;
    },
}

// action은 지연된 상태 변경이 가능하다(비동기적 처리)
const actions: ActionTree<MenuItem, any> = {
    inc(state: ActionContext<MenuItem, any>, step: number) {
        state.commit(`increment`, step);
    },
}
const Menu: Module<MenuItem, any> = {
    namespaced: true, // <- false일 경우, getters, mutations, actions의 이름을 공용으로 사용
    state: new MenuItem(),
    getters,
    mutations,
    actions,
}

export default Menu;