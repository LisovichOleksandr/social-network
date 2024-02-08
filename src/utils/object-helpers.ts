export const updateObjectInArray = (
	items: any,
	itemsId: any,
	objPropName: any,
	newObjectProps: any
) => {
	return items.map((u: any) => {
		if (u[objPropName] === itemsId) {
			return { ...u, ...newObjectProps }
		}
		return u
	})
}
