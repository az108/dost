package de.silvamed.drdost.content

import java.io.File
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class ContentTest {
    // Unit tests run with workingDir = android/app, so the repo root is ../..
    private val json = File("../../shared/content.json").readText()

    @Test
    fun parsesSharedContentJson() {
        val content = ContentLoader.parse(json)
        assertEquals("Dr. Dost", content.praxis.brand)
        assertEquals(11, content.behandlungen.size)
        assertEquals(8, content.fachbereiche.size)
        assertEquals(8, content.galerie.size)
        assertEquals("arzt-portrait.jpg", content.arzt.portrait)
        assertEquals("topics/allergiebehandlung.jpg", content.behandlungen.first().image)
        assertTrue(content.legal.impressum.isNotEmpty())
    }

    @Test
    fun placeholderValuesAreNotReal() {
        assertFalse(ContactValue.isReal("Telefonnummer folgt"))
        assertFalse(ContactValue.isReal("Adresse folgt"))
        assertFalse(ContactValue.isReal("   "))
        assertTrue(ContactValue.isReal("dr.dost@silvamed.de"))
        assertTrue(ContactValue.isReal("+49 871 123456"))
    }
}
