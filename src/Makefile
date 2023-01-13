
run:
ifndef PARENT
	$(target-usage)
endif

ifndef FILE
	$(target-usage)
endif
	mkdir -p ${PARENT}/${FILE}
	touch ${PARENT}/${FILE}/index.tsx
	@echo export \* from \"./${FILE}\" > ${PARENT}/${FILE}/index.tsx
	touch ${PARENT}/${FILE}/${FILE}.tsx
	touch ${PARENT}/${FILE}/styles.module.css

define target-usage
	@echo PARENT or FILE not defined
	@exit 1
endef