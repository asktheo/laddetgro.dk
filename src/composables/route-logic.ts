import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export function useRouteLogic() {
    const router = useRouter();
    const route = useRoute();

    const currentRouteTitle = computed(() => route?.meta?.title);

    const visibleRoutes = computed(() => {
        return router.options.routes.filter((route) =>
            route.meta?.showInNavBar == true )
    });

    const visibleRoutesMobile = computed(() => {
        return visibleRoutes.value.filter((route) => route.meta?.hideOnMobile !== true);
    });

    return {
        visibleRoutes,
        visibleRoutesMobile,
        currentRouteTitle
    };
}