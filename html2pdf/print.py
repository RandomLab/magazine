from weasyprint import HTML

doc = HTML(filename='index.html')
doc.write_pdf('print.pdf')
