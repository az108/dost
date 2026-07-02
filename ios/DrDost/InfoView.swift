import SwiftUI
import DrDostKit

struct InfoView: View {
    let content: SiteContent

    var body: some View {
        NavigationStack {
            List {
                Section("Praxis") {
                    LabeledContent("Sprechzeiten", value: content.praxis.hours)
                }
                Section("Rechtliches") {
                    NavigationLink("Impressum") {
                        LegalTextView(title: "Impressum", paragraphs: content.legal.impressum)
                    }
                    NavigationLink("Datenschutz") {
                        LegalTextView(title: "Datenschutz", paragraphs: content.legal.datenschutz)
                    }
                }
            }
            .navigationTitle("Info")
        }
    }
}

struct LegalTextView: View {
    let title: String
    let paragraphs: [String]

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                ForEach(paragraphs, id: \.self) { paragraph in
                    Text(paragraph)
                }
            }
            .padding()
        }
        .navigationTitle(title)
        .navigationBarTitleDisplayMode(.inline)
    }
}
