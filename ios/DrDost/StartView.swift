import SwiftUI
import DrDostKit

struct StartView: View {
    let content: SiteContent

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    SharedImage(path: content.arzt.portrait)
                        .frame(maxWidth: .infinity)
                        .frame(height: 320)
                        .clipShape(RoundedRectangle(cornerRadius: 16))
                        .accessibilityLabel(content.arzt.name)

                    Text(content.praxis.tagline)
                        .font(.title2.weight(.semibold))
                        .fontDesign(.serif)

                    VStack(alignment: .leading, spacing: 4) {
                        Text(content.arzt.name).font(.headline)
                        Text(content.arzt.qualifications)
                            .font(.subheadline)
                            .foregroundStyle(.secondary)
                    }

                    ForEach(content.arzt.intro + content.arzt.bio, id: \.self) { paragraph in
                        Text(paragraph)
                    }

                    KontaktCard(praxis: content.praxis)
                }
                .padding()
            }
            .navigationTitle(content.praxis.brand)
        }
    }
}

struct KontaktCard: View {
    let praxis: Praxis

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Kontakt").font(.title3.weight(.semibold)).fontDesign(.serif)
            ContactRow(icon: "mappin.and.ellipse", label: "Adresse",
                       value: praxis.address, url: ContactActions.mapsURL)
            ContactRow(icon: "phone", label: "Telefon",
                       value: praxis.phone, url: ContactActions.telURL)
            ContactRow(icon: "iphone", label: "Mobil",
                       value: praxis.mobile, url: ContactActions.telURL)
            ContactRow(icon: "envelope", label: "E-Mail",
                       value: praxis.email, url: ContactActions.mailURL)
            Label {
                VStack(alignment: .leading, spacing: 2) {
                    Text("Sprechzeiten").font(.caption).foregroundStyle(.secondary)
                    Text(praxis.hours)
                }
            } icon: {
                Image(systemName: "clock")
            }
        }
        .padding()
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(RoundedRectangle(cornerRadius: 16).fill(Color(.secondarySystemBackground)))
    }
}
